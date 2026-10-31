package maig.be.api.repositories;

import maig.be.api.models.Appointment;
import maig.be.api.models.BookingAppointment;
import maig.be.api.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookingAppointmentRepository extends CrudRepository<BookingAppointment, Long> {

    Optional<BookingAppointment> findById(Long id);

    BookingAppointment findByAppointment(Appointment appointment);

    BookingAppointment findByUser(User user);

}
