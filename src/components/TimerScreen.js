import React, { Component } from 'react';
import { View, Text as RNText } from 'react-native';
import { Container, Button, Text, Grid, Row, Col, Footer, FooterTab } from 'native-base';

class TimerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState((prevState) => ({
      timeLeft: prevState.timeLeft + 1,
    }));
  }

  evaluate() {
    clearInterval(this.interval);
    this.props.navigator.push({
      name: 'Selection',
      passProps: {
        answer: this.props.answer,
        eval: true,
      },
    });
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }} >
          <Grid>
            <Row size={2} />
            <Row size={1}>
              <Col>
                <RNText
                  style={{
                    fontSize: 48,
                    textAlign: 'center',
                  }}
                >
                  {this.state.timeLeft}
                </RNText>
              </Col>
            </Row>
          </Grid>
          <Footer>
            <FooterTab>
              <Button
                full
                onPress={() => this.evaluate()}
              >
                <Text>
                  Done
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    );
  }
}

export default TimerScreen;
