import React, { useEffect, useState } from "react";
import { View, Text,Image} from "react-native";
import { DATA } from "../Data";
import { FlatList } from "react-native-gesture-handler";

export const Profile = ({ route }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const { userId } = route.params;
    const userData = DATA.find((e) => e.id === userId);
    setUser(userData);
  }, [route.params]);

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#87cefa",
      alignItems: "center"
    }}>
      <Image style={{width:200,height:200,borderRadius:100,borderWidth:5,borderColor:"purple"}}source={{uri:user.avatar}}/>
      <Text style={{fontWeight:"bold",fontSize:25}}>{user.name}</Text>
      <Text style={{color:"gray",fontSize:15}}>{user.email}</Text>
      <View style={{flexDirection:"row", width:200,height:100}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:35,fontWeight:"bold"}}>{user.followers}</Text>
          <Text>Takipçi</Text>
        </View>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:35,fontWeight:"bold"}}>{user.follows}</Text>
          <Text>Takip</Text>
        </View>
      </View>
      <Text style={{padding:10,color:"gray"}}>{user.about}</Text>
      
      <FlatList
      numColumns={3}
      showsVerticalScrollIndicator={false}
      data={user.post}
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
      <Image style={{width:120,height:120,margin:2,borderRadius:10}} 
      source={{ uri: item.image }} />
  )}
/>

    </View>
  );
};



