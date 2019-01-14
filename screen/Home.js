import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setPlanets } from '../store/actions'

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }


    componentDidMount() {
        axios.get('https://swapi.co/api/planets')
        .then(res => this.props.setPlanets(res.data.results))
        .catch(err => console.log(err))
    }
  render() {
      console.log(this.props)
    return (
      <View style={styles.container}>
        <FlatList data={this.props.redux.planets}
        renderItem={({item}) => {
            return (
                <View>
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                </View>
            )
        }}/>
        <Button title="Go To Second Screen"
        onPress={() => this.props.navigation.navigate('SecondScreen')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

const mapDispatchToprops = (dispatch) => bindActionCreators({setPlanets}, dispatch)

export default connect(mapStateToProps, mapDispatchToprops)(Home)