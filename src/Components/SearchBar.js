import react from "react";
import { View, StyleSheet,TextInput, Text } from "react-native";
import {Feather} from '@expo/vector-icons'

const SearchBar = ({searchTerm, onChangeText, ontermSubmit}) => {

    return <View style={styles.backGroundStyle}>
        <Feather name="search" style={styles.featherStyle}/>
        <TextInput
        style={styles.textInputStyle}
        placeholder="Search food.."
        autoCapitalize="none"
        autoCorrect={false}
        value={searchTerm}
        onChangeText={onChangeText}
        onEndEditing={ontermSubmit}
        />
    </View>
};

const styles = StyleSheet.create({

    backGroundStyle: {
        marginTop: 15,
        backgroundColor: "#D9D9D9",
        height: 45,
        borderRadius: 20,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10

    },
    textInputStyle: {
        flex: 1,
        fontSize: 15,
        
    },
    featherStyle: {
        fontSize: 25,
        alignSelf: "center",
        marginHorizontal: 10
    }
});


export default SearchBar;