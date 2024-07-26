import { View ,Image,Text} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export const User = ({avatar,name,email,id}) => {

    const nav=useNavigation();
    return (
    <View
      style={{
        width: "90%",
        height:80,
        margin: 2,
        padding: 2,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 2 }} >
        <Image style={{width:80,height:80,borderRadius:40,borderWidth:3,borderColor:"purple"}} source={{uri:avatar}}/>
      </View>
      <View style={{flex: 4,justifyContent:"center"}} >
        <Text style={{fontWeight:"bold",fontSize:20}}>{name}</Text>
        <Text style={{color:"gray"}}>{email}</Text>
        
      </View>
      <View style={{flex: 1 ,justifyContent:"center",alignItems:"center",marginLeft:10}} >
        <TouchableOpacity onPress={() =>nav.navigate("profile",{userId:id})}>
        <MaterialCommunityIcons name="donkey" size={24} color="black" />
        </TouchableOpacity>
     
      </View>
    </View>
  );
};
