package com.hms.controller;

import com.hms.model.Patient;
import com.hms.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patient")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @PostMapping
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        return ResponseEntity.ok(patientService.createPatient(patient));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {
        return patientService.getPatientById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {
        return ResponseEntity.ok(patientService.getAllPatients());
    }

    @PutMapping
    public ResponseEntity<Patient> updatePatient(@RequestBody Patient patient) {
        return ResponseEntity.ok(patientService.updatePatient(patient));
    }
}


