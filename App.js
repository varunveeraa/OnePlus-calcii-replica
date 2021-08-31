import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import calcii from './src/screens/calcii'

const navigator = createStackNavigator(
  {
    calci: calcii
  },
  {
    initialRouteParams: 'calci',
    defaultRouteeOption: {
      title: 'calcii'
    }
  }
)

export default createAppContainer(navigator)