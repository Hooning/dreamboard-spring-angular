package com.practice.mavenangularspring.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "board")
public class Board extends AuditModel{

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name = "board_id", updatable = false, nullable = false)
  private Long id;

//  If you use below get all dreams from board
//  @OneToMany(fetch = FetchType.LAZY, mappedBy = "board")
//  private List<Dream> dreams;

  @NotBlank
  @Size(min = 1, max = 50)
  @Column(name = "board_name", nullable = false)
  private String boardName;

  private String category;

  private String description;

  public String getBoardName() {
    return boardName;
  }

  public void setBoardName(String boardName) {
    this.boardName = boardName;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Long getBoardId() {
    return id;
  }

  public void setBoardId(Long id) {
    this.id = id;
  }

//  If you use below get all dreams from board
//  public List<Dream> getDreams() {
//    return dreams;
//  }
//
//  public void setDreams(List<Dream> dreams) {
//    this.dreams = dreams;
//  }
}
