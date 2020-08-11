import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
    },

    filterButton: {
        height: 50,
        width: 50,
        borderRadius: 8,
        backgroundColor: '#643CC1',
        alignItems: 'center',
        alignContent: 'center',
    },

    filterImg: {
        marginTop: 15,
        alignSelf: 'auto',
        alignItems: 'center',
        textAlign: 'center',
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',
    },

    pickerContainer: {
        height: 74,
    },

    picker: {
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8, 
        borderBottomRightRadius: 8,
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    pickerDD: {
        backgroundColor: '#fafafa',
        marginTop: 2,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    submitButton: {
        backgroundColor: '#04D361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },

})

export default styles;