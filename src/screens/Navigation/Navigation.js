import { Button, View } from "react-native"

//                     props
//                       |
export const Navigation = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", gap: 20}}>

            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />

            <Button
                title="Schedule"
                onPress={() => navigation.navigate("DoctorSchedule")}
            />

            <Button
                title="Record"
                onPress={() => navigation.navigate("Record")}
            />

            <Button
                title="Profile"
                onPress={() => navigation.navigate("Profile")}
            />

            {/* <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            /> */}

        </View>
    );
}
