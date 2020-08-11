import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from "@react-native-community/picker";

import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';



function TeacherList() {
    const [isFiltersVisible, setIsFilterVisible] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const materias = [
        { value: '', label: 'Selecione uma materia', selected: true, disabled: true },
        { value: 'Artes', label: 'Artes' },
        { value: 'Biologia', label: 'Biologia' },
        { value: 'Ciencias', label: 'Ciencias' },
        { value: 'Educacao Fisica', label: 'Educacao Fisica' },
        { value: 'Fisica', label: 'Fisica' },
        { value: 'Geografia', label: 'Geografia' },
        { value: 'Historia', label: 'Historia' },
        { value: 'Matematica', label: 'Matematica' },
        { value: 'Portugues', label: 'Portugues' },
        { value: 'Quimica', label: 'Quimica' }
    ];

    const dias = [
        { value: '', label: 'Selecione um dia da semana', selected: true, disabled: true },
        { value: '0', label: 'Domingo' },
        { value: '1', label: 'Segunda-feira' },
        { value: '2', label: 'Terca-feira' },
        { value: '3', label: 'Quarta-feira' },
        { value: '4', label: 'Quinta-feira' },
        { value: '5', label: 'Sexta-feira' }, 
        { value: '6', label: 'Sabado' },
    ];


    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersId = favoritedTeachers.map( (teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersId);
            }
        });
    }

    function handleToggleFiltersVisible() {
        setIsFilterVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();

        const response = await api.get('classes',{
            params: {
                subject,
                week_day,
                time,
            }
        });


        setIsFilterVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader  
                title="Proffys disponiveis" 
                headerRight={(
                    <BorderlessButton 
                        onPress={handleToggleFiltersVisible}
                        style={styles.filterButton}>
                        <Feather name='filter' size={20} color='#FFF' style={styles.filterImg} />
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>
                            Materia    
                        </Text>



                        <DropDownPicker
                            items={materias}
                            containerStyle={styles.pickerContainer}
                            style={styles.picker}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={styles.pickerDD}
                            onChangeItem={(item) => {
                                setSubject(item.value)
                            }}
                        />


                       
                       {/* <TextInput 
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder='Qual a materia?'
                            placeholderTextColor='#C1BCCC'
                       /> */}

                       
                        {/* Bloco de inputs para o dia e hora */}
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>
                                    Dia da semana    
                                </Text>
                                <DropDownPicker
                                    items={dias}
                                    containerStyle={styles.pickerContainer}
                                    style={styles.picker}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={styles.pickerDD}
                                    onChangeItem={(item) => { setWeekDay(item.value)}}
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>
                                    Horario   
                                </Text>
                                <TextInput 
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder='Qual horario?'
                                    placeholderTextColor='#C1BCCC'
                                />
                            </View>
                        </View>

                        <RectButton 
                            onPress={handleFiltersSubmit}
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}    
            </PageHeader>
            
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            > 
                {teachers.map((teacher: Teacher) => {
                    return(
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />
                    )
                })}

            </ScrollView>
            
        </View>
    );
}

export default TeacherList;