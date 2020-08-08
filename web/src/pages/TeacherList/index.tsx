import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';



function TeacherList(){
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    
    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes',{
            params: {
                subject,
                week_day,
                time,
            }
        });

        console.log(response.data);

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sao os proffys disponiveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                
                    <Select 
                        name="subject" 
                        label="Materia"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value)}}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciencias', label: 'Ciencias' },
                            { value: 'Educacao Fisica', label: 'Educacao Fisica' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Historia', label: 'Historia' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Portugues', label: 'Portugues' },
                            { value: 'Quimica', label: 'Quimica' },
                        ]} 
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value)}}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terca-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' }, 
                            { value: '6', label: 'Sabado' },                          
                        ]} 
                    />

                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value)}}
                    />

                    
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) =>{
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    )
}

export default TeacherList;