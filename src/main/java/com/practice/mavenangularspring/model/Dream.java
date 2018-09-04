package com.practice.mavenangularspring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "dream")
public class Dream extends AuditModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "dream_id", nullable = false)
  private Long dreamId;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "board_id", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
  @JsonIgnore
  private Board board;

  @NotBlank
  @Size(min = 1, max = 100)
  @Column(name = "dream_name", nullable = false)
  private String dreamName;

  @Column(name = "description")
  private String description;

  @Temporal(TemporalType.DATE)
  @Column(name = "plan_date", nullable = false)
  private Date planDate;

  @Column(name = "estimate_cost")
  private float estimateCost;

  @Column(name = "image_path")
  private String imagePath;

  @NotBlank
  @Column(name = "importance_size", nullable = false)
  private Integer importanceSize;
  @NotBlank
  @Column(name = "achieve_yn", nullable = false)
  private char achieveYn;
  @NotBlank
  @Column(name = "display_yn", nullable = false)
  private char displayYn;

  // Getter and Setter
  public Long getDreamId() {
    return dreamId;
  }

  public void setDreamId(Long dreamId) {
    this.dreamId = dreamId;
  }

  public String getDreamName() {
    return dreamName;
  }

  public void setDreamName(String dreamName) {
    this.dreamName = dreamName;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Date getPlanDate() {
    return planDate;
  }

  public void setPlanDate(Date planDate) {
    this.planDate = planDate;
  }

  public float getEstimateCost() {
    return estimateCost;
  }

  public void setEstimateCost(float estimateCost) {
    this.estimateCost = estimateCost;
  }

  public String getImagePath() {
    return imagePath;
  }

  public void setImagePath(String imagePath) {
    this.imagePath = imagePath;
  }

  public Integer getImportanceSize() {
    return importanceSize;
  }

  public void setImportanceSize(Integer importanceSize) {
    this.importanceSize = importanceSize;
  }

  public char getAchieveYn() {
    return achieveYn;
  }

  public void setAchieveYn(char achieveYn) {
    this.achieveYn = achieveYn;
  }

  public char getDisplayYn() {
    return displayYn;
  }

  public void setDisplayYn(char displayYn) {
    this.displayYn = displayYn;
  }

  public Board getBoard() {
    return board;
  }

  public void setBoard(Board board) {
    this.board = board;
  }

}

