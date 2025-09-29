package com.hms.controller;

import com.hms.model.Doctor;
import com.hms.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @PostMapping
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
        return ResponseEntity.ok(doctorService.createDoctor(doctor));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable Long id) {
        return doctorService.getDoctorById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        return ResponseEntity.ok(doctorService.getAllDoctors());
    }

    @PutMapping
    public ResponseEntity<Doctor> updateDoctor(@RequestBody Doctor doctor) {
        return ResponseEntity.ok(doctorService.updateDoctor(doctor));
    }
}


