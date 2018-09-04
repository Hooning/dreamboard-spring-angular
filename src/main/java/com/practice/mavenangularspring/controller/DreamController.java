package com.practice.mavenangularspring.controller;

import com.practice.mavenangularspring.exception.ResourceNotFoundException;
import com.practice.mavenangularspring.model.Dream;
import com.practice.mavenangularspring.repository.BoardRepository;
import com.practice.mavenangularspring.repository.DreamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class DreamController {

  @Autowired
  private DreamRepository dreamRepository;

  @Autowired
  private BoardRepository boardRepository;

  @GetMapping("/boards/{boardId}/dreams")
  public List<Dream> getDreamsByBoardId(@PathVariable Long boardId){
    return dreamRepository.findByBoardId(boardId);
  }

  @PostMapping("/boards/{boardId}/dreams")
  public Dream addDream(@PathVariable Long boardId,
                        @Valid @RequestBody Dream dream){
    return boardRepository.findById(boardId)
            .map(board -> {
              dream.setBoard(board);
              return dreamRepository.save(dream);
            }).orElseThrow(() -> new ResourceNotFoundException("Board not found with id " + boardId));

  }

  @PutMapping("/boards/{boardId}/dreams/{dreamId}")
  public Dream updateDream(@PathVariable Long boardId,
                           @PathVariable Long dreamId,
                           @Valid @RequestBody Dream dreamRequest){
    if ( !boardRepository.existsById(boardId)){
      throw new ResourceNotFoundException("Board not found with id " + boardId);
    }

    return dreamRepository.findById(dreamId)
            .map(dream -> {

              dream.setDreamName(dreamRequest.getDreamName());
              dream.setDescription(dreamRequest.getDescription());
              dream.setPlanDate(dreamRequest.getPlanDate());
              dream.setEstimateCost(dreamRequest.getEstimateCost());
              dream.setImagePath(dreamRequest.getImagePath());
              dream.setImportanceSize(dreamRequest.getImportanceSize());
              dream.setAchieveYn(dreamRequest.getAchieveYn());
              dream.setDisplayYn(dreamRequest.getDisplayYn());

              return dreamRepository.save(dream);
            }).orElseThrow(() -> new ResourceNotFoundException("Dream not found with id " + dreamId));
  }

  @DeleteMapping("/boards/{boardId}/dreams/{dreamId}")
  public ResponseEntity<?> deleteDream(@PathVariable Long boardId,
                           @PathVariable Long dreamId ){
    if ( !boardRepository.existsById(boardId)){
      throw new ResourceNotFoundException("Board not found with id " + boardId);
    }

    return dreamRepository.findById(dreamId)
            .map(dream -> {
              dreamRepository.delete(dream);
              return ResponseEntity.ok().build();
            }).orElseThrow(() -> new ResourceNotFoundException("Dream not found with id " + dreamId));
  }

}
