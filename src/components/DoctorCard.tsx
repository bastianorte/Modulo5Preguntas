import { useEffect, useState } from 'react';


const DoctorCard = ({data:doctores}) => {



  useEffect(() => {
    if (doctores.length > 0) {
      console.log('Datos de doctores recibidos:', doctores);
    }
  }, [doctores]);  

  const [specialtyFilter, setSpecialtyFilter] = useState('');

  const filteredDoctors = specialtyFilter
    ? doctores.filter(doctor => doctor.especialidad === specialtyFilter)
    : doctores;

    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center pb-8">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-primary sm:text-4xl">Equipos Médico</h2>

        <div className='my-6'>
          <label className='font-medium my-6'>Filtrar por especialidad: </label>
          <select
            value={specialtyFilter}
            onChange={e => setSpecialtyFilter(e.target.value)}
            className='bg-light border border-primary text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          >
            <option value="">Todas</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Neurología">Neurología</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Dermatología">Dermatología</option>
          </select>
        </div> 
        </div>
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">         
        {filteredDoctors.map((doctor) => (
        <div key={doctor.id} className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-light">
            <div className="flex flex-col items-center pb-4 pt-6">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={doctor.imagen}  alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-primary">{doctor.genero === "m" ? 'Dr' : 'Dra'} {doctor.nombre}</h5>
                <span className="text-sm text-primary">{doctor.especialidad}</span>
                <span className="text-sm text-primary">{doctor.experiencia} años de experiencia</span>

            </div>
        </div>
        ))}

        </div>
      </div>
    )
}


export default DoctorCard