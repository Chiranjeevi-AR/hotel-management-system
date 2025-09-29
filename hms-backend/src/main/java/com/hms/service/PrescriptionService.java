package com.hms.service;

import com.hms.model.Prescription;
import com.hms.repository.PrescriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PrescriptionService {
    private final PrescriptionRepository prescriptionRepository;

    public Prescription createPrescription(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    public Optional<Prescription> getPrescriptionById(Long id) {
        return prescriptionRepository.findById(id);
    }

    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }
}


