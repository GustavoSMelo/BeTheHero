import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Incidents from '../views/incidents';
import Details from '../views/details';

const AppStack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incident" component={Incidents} />
                <AppStack.Screen name="Detail" component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
