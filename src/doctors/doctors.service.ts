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
    return this.doctors.find(doctor => doctor.id ===  id);
  }

  getSpecializations(){
    return ['Physician', 'Neuro Surgeon', 'Paediatrician']
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
