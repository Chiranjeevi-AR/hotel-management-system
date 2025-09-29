package com.hms.dto;

import lombok.Data;

@Data
public class DoctorDto {
    private Long id;
    private Long userId;
    private String fullName;
    private String specialization;
    private String phone;
    private String email;
}


