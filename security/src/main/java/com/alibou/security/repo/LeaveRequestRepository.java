package com.alibou.security.repo;

import com.alibou.security.user.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Long> {
    // You can add custom query methods here if needed
}
