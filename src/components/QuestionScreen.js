import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Text, Card, CardItem, Body, Footer, FooterTab } from 'native-base';

class QuestionScreen extends Component {
  showSelection(question) {
    this.props.navigator.push({
      name: 'Timer',
      passProps: {
        question,
        answer: this.props.answer,
      },
    });
  }

  constructor(props) {
    super(props);
    const index = Math.floor(Math.random() * (props.questions.length)) + 1;
    this.state = {
      index,
    };
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <Card>
            <CardItem
              button
              onPress={() => this.showSelection(this.props.questions[this.state.index])}
            >
              <Body>
                <Text>
                  {this.props.questions[this.state.index]}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Footer>
            <FooterTab>
              <Button onPress={() => this.showSelection(this.props.questions[this.state.index])}>
                <Text>
                  Proceed
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    );
  }

}

export default QuestionScreen;
