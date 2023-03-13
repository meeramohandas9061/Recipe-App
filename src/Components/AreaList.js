import react from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import CategoryList from './CategoryList';
import { withNavigation} from 'react-navigation'
import SingleAreaTile from './SingleAreaTile';

const AreaList = ({areaData, navigation}) => {
    
    return <SafeAreaView>
        <Text style={styles.titleStyle}>Browse Countries</Text>
            <FlatList
            horizontal={true}
            data={areaData}
            keyExtractor={(item) => item.strArea}

            renderItem = {({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('AreaRecipeList', {area: item.strArea}) }>
                         <SingleAreaTile area={item}/>
                    </TouchableOpacity>
                       
                    
                );
            }}
            />
       </SafeAreaView>
};

const styles = StyleSheet.create({

    titleStyle: {
        // backgroundColor: "#DBF0F9",
        fontSize: 21,
        color: "black",
        fontWeight: "bold",
        paddingLeft: 15,
        paddingTop: 10,
    },
});

export default withNavigation(AreaList);

