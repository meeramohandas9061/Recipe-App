import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { FlatGrid } from 'react-native-super-grid';

export default function IngredientScreen({navigation}) {
    const [IngredientList, setIngredientList] = useState([]);

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };
    const getIngredientsList = () => {
        const apiURL =
          "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
          console.log(apiURL);
        fetch(apiURL)
          .then((response) => response.json())
          .then((responseJson) => {
            setIngredientList(responseJson.meals);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      useEffect(() => {
        getIngredientsList();
      }, []);

  return (
    <FlatGrid
      itemDimension={130}
      data={IngredientList}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity
            onPress={()=> 
                 navigation.navigate('CategoryDetail', {strCategory: item.strIngredient}) 
              }
            >
        <View style={[styles.itemContainer, {backgroundColor: "black"}]}>
            
            <Text style={styles.itemName}>{item.strIngredient}</Text>
            
           
        </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    borderWidth: 2,
    borderColor: "#9b59b6"
  },
  itemName: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#ffff',
  },
});