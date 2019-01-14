import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';

class SecondScreen extends React.Component {
    static navigationOptions = {
        title: 'Second'
    }
    render() {
        return(
            <View>
                <FlatList
                    data={ this.props.redux.planets }
                    renderItem={ ({item}) => <Text> {item.name} </Text>}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}
export default connect(mapStateToProps)(SecondScreen)