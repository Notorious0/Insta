import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack=createStackNavigator();

const Logo = () =>{
    return(
        <View style={{backgroundColor:"purple",justifyContent:"center",alignItems:"center",margin:5,width:70,height:70,borderRadius:45}}>
           <Text style={{fontWeight:"bold",fontSize:26,color:"#87cefa"}}>NTR</Text>
        </View>
    )
}

export const Navigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="home"
            component={Home} 
            options={{
                headerLeft:() =><Logo />,
                headerShadowVisible:false,
                title:"MyApp",
                headerTitleStyle:{
                    fontSize:25
                },
                headerStyle:{
                   height:150
                },
            }}
            />
          <Stack.Screen
  name="profile"
  component={Profile}
  options={({ navigation }) => ({
    headerRight: () => (
      <TouchableOpacity style={{ margin: 15}} onPress={() => navigation.navigate("home")}>
        <Logo />
      </TouchableOpacity>
    ),
    title: "Profil",
    headerShadowVisible: false,
  })}
/>


        </Stack.Navigator>
    );
};