import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-rbold' : 'font-rregular'} text-xs`} style={{ color: color }}>
                {name}
            </Text>
        </View>
    );
}

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ 
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#1A1A2E',
            tabBarInactiveTintColor: '#CCCCCC',
            tabBarStyle: {
                backgroundColor: '#F7F7F7',
                borderTopWidth: 1,
                borderTopColor: '#F7F7F7',
                height: 60,
            }
            }}>
            <Tabs.Screen 
                name="home" 
                options={{
                    title: 'Home', 
                    headerShown: false, 
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen 
                name="profile" 
                options={{
                    title: 'Profile', 
                    headerShown: false, 
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

export default TabsLayout;
