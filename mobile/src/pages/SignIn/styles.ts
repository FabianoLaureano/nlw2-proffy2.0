import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#f0f0f7',
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: '#8257E5',
        padding: 40
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
        marginBottom: 4,
    },

    description: {
        marginBottom: 90,
        color: '#d4c2ff',
        fontSize: 18,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },
    
    textLoginContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 20 
    },

    loginText: {
        fontSize: 24,
        fontFamily: 'Poppins_600SemiBold',
        color: '#000'
    },

    loginForm: {
        marginBottom: 30,
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

    checkboxContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 5
    },

    checkbox: {
        alignSelf: "center",
    },

    checkboxText: {
        marginStart: 5,
        marginEnd: 25,
        color: '#d4c2ff'
    },

    text: {
        color: '#d4c2ff'
    },

    loginButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    loginButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
    
});

export default styles;