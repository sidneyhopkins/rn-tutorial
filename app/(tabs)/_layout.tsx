import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

interface TabIconProps {
  icon: any;
  focused: boolean;
  color: string;
  name: string;
}

const TabIcon = ({ icon, focused, color, name }: TabIconProps) => {
  return (
    <View className='flex flex-1 items-center'>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className='w-6 h-6'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>{name}</Text>
    </View>
  )
}

const tabNames = ['Home', 'Create', 'Bookmark', 'Profile']

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      {
        tabNames.map((tabName, index) => (
          <Tabs.Screen key={index} name={tabName.toLowerCase()}
            options={{
              title: tabName,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons[tabName.toLowerCase()]} focused={focused} color={color} name={tabName} />
              )
            }}
          />
        ))
      }
    </Tabs>
  )
}

export default TabsLayout