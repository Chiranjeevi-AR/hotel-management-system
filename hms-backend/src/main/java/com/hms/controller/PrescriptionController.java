package com.hms.controller;

import com.hms.model.Prescription;
import com.hms.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prescription")
public class PrescriptionController {
    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping
    public ResponseEntity<Prescription> createPrescription(@RequestBody Prescription prescription) {
        return ResponseEntity.ok(prescriptionService.createPrescription(prescription));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prescription> getPrescriptionById(@PathVariable Long id) {
        return prescriptionService.getPrescriptionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Prescription>> getAllPrescriptions() {
        return ResponseEntity.ok(prescriptionService.getAllPrescriptions());
    }
}


