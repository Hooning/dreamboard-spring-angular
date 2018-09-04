package com.practice.mavenangularspring.controller;

import com.practice.mavenangularspring.exception.ResourceNotFoundException;
import com.practice.mavenangularspring.model.Board;
import com.practice.mavenangularspring.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class BoardController {

  @Autowired
  private BoardRepository boardRepository;

  @GetMapping("/boards")
  public Page<Board> getBoards(Pageable pageable){
    return boardRepository.findAll(pageable);
  }

  @PostMapping("/boards")
  public Board createBoard(@Valid @RequestBody Board board){
    return boardRepository.save(board);
  }

  @PutMapping("/boards/{boardId}")
  public Board updateBoard(@PathVariable Long boardId, @Valid @RequestBody Board boardRequest){
    return boardRepository.findById(boardId)
            .map(board -> {
              board.setBoardName(boardRequest.getBoardName());
              board.setCategory(boardRequest.getCategory());
              board.setDescription(boardRequest.getDescription());

              return boardRepository.save(board);
            }).orElseThrow(() -> new ResourceNotFoundException("Board not found with id " + boardId));
  }

  @DeleteMapping("/boards/{boardId}")
  public ResponseEntity<?> deleteBoard(@PathVariable Long boardId){
    return boardRepository.findById(boardId)
            .map(board -> {
              boardRepository.delete(board);
              return ResponseEntity.ok().build();
            }).orElseThrow(() -> new ResourceNotFoundException("Board not found with id " + boardId));
  }

}
