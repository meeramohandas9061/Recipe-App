import react from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SingleRecipeTile from "./SingleRecipeTile";
import {withNavigation} from 'react-navigation'

const RecipeTile = ({data, navigation}) => {
    console.log(data[0])
    return <View >
        <Text style={styles.titleStyle}>Popular Recipes</Text>
        <FlatList
        data={data}
        horizontal={true}
        keyExtractor={results => results.idMeal}
        // numColumns={2}
        renderItem={({item}) => {
          
            return (
                <TouchableOpacity onPress={() => navigation.navigate('RecipeDetailScreen', {id: item.idMeal})}>
                    <SingleRecipeTile recipieData={item}/>
                </TouchableOpacity>
            )
        }}
        />
    </View>

};

const styles = StyleSheet.create({
    titleStyle: {
        // backgroundColor: "#DBF0F9",
        fontSize: 21,
        color: "black",
        fontWeight: "bold",
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 5
    },
});
export default withNavigation(RecipeTile);