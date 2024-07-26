import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { DATA } from "./Data"
import { User } from "./screens/User"

export const UserList= () =>{
    return(
        <View style={{width:"90%"}}>
            <FlatList  data={DATA} keyExtractor={(e) =>e.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <User avatar=
                {item.avatar} 
                name={item.name} 
                email={item.email} 
                id={item.id} />}
                />
        </View>
    )
};