import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
        justifyContent: 'center',
        padding: 40
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#000',
        fontSize: 22,
        lineHeight: 37,
        maxWidth: 180,
        marginBottom: 2,
        marginTop: -30
    },

    description: {
        marginBottom: 60,
        color: '#000',
        fontSize: 14,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },
    
    textSignUpContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: -30 
    },

    signUpText: {
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        color: '#000'
    },

    signUpForm: {
        marginBottom: 0,
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: -2
    },

    text: {
        color: '#d4c2ff'
    },

    signUpButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        marginBottom: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    signUpButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
    
});

export default styles;