import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection'
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline, acceptPhrase, declinePhrase }) => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    {onAccept ? <Button onPress={onAccept} >{acceptPhrase}</Button> : null}
                    {onDecline ? <Button onPress={onDecline} >{declinePhrase}</Button> : null}
                </CardSection>
            </View>
        </Modal>
    );
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm };