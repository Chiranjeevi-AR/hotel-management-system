package com.hms.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "prescriptions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "appointment_id")
    private Appointment appointment;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    private String medication;
    private String dosage;
    private String instructions;
    private LocalDateTime issuedAt;
}


