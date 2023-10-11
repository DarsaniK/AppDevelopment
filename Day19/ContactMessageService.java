package com.example.plantpro.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.plantpro.Model.ContactMessage;
import com.example.plantpro.Repository.ContactMessageRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ContactMessageService {
    @Autowired
    private final ContactMessageRepository contactMessageRepository;

    public ContactMessageService(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAll();
    }

    public Optional<ContactMessage> getMessageById(Long id) {
        return contactMessageRepository.findById(id);
    }

    public ContactMessage saveMessage(ContactMessage message) {
        return contactMessageRepository.save(message);
    }

    public void deleteMessage(Long id) {
        contactMessageRepository.deleteById(id);
    }
}

