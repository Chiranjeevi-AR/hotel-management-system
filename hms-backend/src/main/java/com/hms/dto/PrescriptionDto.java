package com.hms.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class PrescriptionDto {
    private Long id;
    private Long appointmentId;
    private Long doctorId;
    private Long patientId;
    private String medication;
    private String dosage;
    private String instructions;
    private LocalDateTime issuedAt;
}


