import react from "react";
import { View, StyleSheet,TextInput, Text } from "react-native";
import {Feather} from '@expo/vector-icons'

const SearchBar = ({searchTerm, onChangeText, ontermSubmit}) => {

    return <View style={[styles.backGroundStyle, styles.shadowProp]}>
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
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
      },
    backGroundStyle: {
        marginTop: 20,
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
        marginHorizontal: 15
    }
});


export default SearchBar;