package com.practice.mavenangularspring.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(
    value = {"registerDate", "updateDate"},
    allowGetters = true
)

public abstract class AuditModel implements Serializable {
  @Temporal(TemporalType.DATE)
  @Column(name = "register_date", nullable = false, updatable = false)
  @CreatedDate
  public Date registerDate;

  @Temporal(TemporalType.DATE)
  @Column(name = "update_date", nullable = false)
  @LastModifiedDate
  public Date updateDate;

  public Date getRegisterDate() {
    return registerDate;
  }

  public void setRegisterDate(Date registerDate) {
    this.registerDate = registerDate;
  }

  public Date getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(Date updateDate) {
    this.updateDate = updateDate;
  }

}
