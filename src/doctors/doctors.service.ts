import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorsService {
  private doctors = [];
  create(createDoctorDto: CreateDoctorDto) {
    const newId = this.doctors.length + 1;    
    const newDoctor = {
      id: newId,
      ...createDoctorDto
    };

    this.doctors.push(newDoctor);
    return newDoctor;
  }

  findAll() {
    return this.doctors;
  }

  findOne(id: number) {
    return this.doctors.find(doctor => doctor.id ==  id);
  }

  getSpecializations(){
    return ['Physician', 'Neuro Surgeon', 'Paediatrician']
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    const currentUser = this.findOne(id);
    if(currentUser){
      const updatedUser = {
        ...currentUser,
        ...updateDoctorDto
      };
      this.doctors = this.doctors.map(user => {
        if(id == user.id){
          return {
            ...user,
            ...updateDoctorDto
          };
        };
        return user;
      });
      return updatedUser;
    }
    return {
      error: 'No user found'
    }
    
  }

  remove(id: number) {
    this.doctors = this.doctors.filter(doctor => doctor.id != id);
    return this.doctors;
  }
}
