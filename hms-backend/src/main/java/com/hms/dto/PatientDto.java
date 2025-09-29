package com.hms.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class PatientDto {
    private Long id;
    private Long userId;
    private String fullName;
    private LocalDate dob;
    private String gender;
    private String address;
    private String phone;
}


