package maig.be.api.repositories;

import maig.be.api.models.Appointment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment, Long> {

    Appointment getById(Long id);

    Appointment findByDateAndTime();

    List<Appointment> findAllByDateAndTime();

    List<Appointment> findByUser();

}
