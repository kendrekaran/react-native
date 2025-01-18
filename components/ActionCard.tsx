import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                {/* Header Section */}
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's New in JavaScript 21 - ES12
                    </Text>
                </View>

                {/* Image Section */}
                <Image
                    source={{
                        uri: "https://i.pinimg.com/474x/00/20/9c/00209c03877541e67fb9b9349017ab41.jpg",
                    }}
                    style={styles.cardImage}
                />

                {/* Body Section */}
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText} numberOfLines={3}>
                        React Native DevTools is the preferred debugging tool for Fabric. Open it by typing "j" in your Metro terminal to launch it in Chrome or Edge. It provides better insights than Metro's default logging.
                    </Text>
                </View>

                {/* Footer Section */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite("https://youtu.be/TNzpBP6B98c?si=nfOX3nA4zx6JtaTO")}>
                        <Text style={styles.footerText}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
    },
    elevatedCard: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    headingContainer: {
        marginBottom: 12,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    cardImage: {
        height: 180,
        width: '100%',
        borderRadius: 8,
        marginVertical: 12,
    },
    bodyContainer: {
        marginBottom: 16,
    },
    bodyText: {
        fontSize: 14,
        color: '#4b5563',
        lineHeight: 20,
    },
    footerContainer: {
        alignItems: 'flex-end',
    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2563eb',
    },
});
