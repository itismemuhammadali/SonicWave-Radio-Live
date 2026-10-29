# 📻 SonicWave Radio Live

<p align="center">
  <img src="assets/branding/banner.png" alt="SonicWave Radio Live Banner" width="100%" style="border-radius: 16px; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);" />
</p>

<p align="center">
  <img src="assets/branding/logo.jpg" alt="SonicWave Radio Live Logo" width="160" style="border-radius: 24px; box-shadow: 0 8px 32px rgba(236, 72, 153, 0.35);" />
</p>

> **Cross-Platform Digital Audio & Live Radio Broadcast Streaming Mobile Application** built with **React Native and react-native-sound**, featuring sub-second live station streaming, dynamic station artwork, background playback lifecycle management, and station switching.

[![React Native](https://img.shields.io/badge/React_Native-0.74-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Audio Engine](https://img.shields.io/badge/Engine-react--native--sound-FF5722?style=for-the-badge)](https://github.com/zmxv/react-native-sound)
[![Platform](https://img.shields.io/badge/Platform-iOS_|_Android-38B000?style=for-the-badge)](https://reactnative.dev)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## 📌 Executive Summary

**SonicWave Radio Live** is a production mobile audio streaming client delivering national and regional live radio broadcasts across Pakistan and South Asia. Engineered with native audio driver hooks via `react-native-sound`, it provides low-latency HTTP/HTTPS live stream decoding, smooth buffer recovery, and continuous audio playback even through transient network fluctuations.

---

## 🏗️ System Architecture

```mermaid
graph TD
    subgraph UI & Navigation [React Native View Layer]
        StationCarousel[Interactive Station Grid & Artwork Carousel]
        PlayerModal[Full-Screen Live Player & Equalizer View]
        MiniPlayer[Persistent Sticky Bottom Playback Bar]
        ChannelSelector[Live Broadcast Channel Switcher]
    end

    subgraph Audio Control Pipeline
        SoundInstance[Sound Audio Stream Controller]
        BufferManager[Stream Buffer & Reconnect Orchestrator]
        AudioFocus[System Audio Focus & Interruption Handler]
    end

    subgraph Live Stream CDN Endpoints
        SautUlQuran[Saut ul Quran - 7002 HD Stream]
        PlanetFM[Planet FM 87.6 - 7042 Live]
        FM101[FM 101 Islamabad - 7008 Live]
        WorldService[PBC World Service Broadcast - 7005]
        SportsChannel[Sports & Health Channel - 7007]
    end

    UI --> AudioControlPipeline
    SoundInstance --> LiveStreamCDNEndpoints
```

---

## ✨ Core Features & Technical Highlights

### 1. 📡 Multi-Channel Live Broadcast Hub
- **Station Directory:** Includes official live streams for *Saut ul Quran*, *Planet FM 87.6*, *FM 101 Islamabad*, *Islamabad Central Station*, *Current Affairs Channel*, *PBC World Service*, and the *Sports & Health Network*.
- **Dynamic Stream Buffering:** Automatically handles network latency, connection handshakes, and jitter buffer stabilization.

### 2. 🎛️ Audio Lifecycle & Interruption Management
- Integrated `react-native-sound` state tracking managing stream initialization, playing, pausing, buffering, and resource disposal.
- Audio focus lifecycle handling to gracefully pause playback upon incoming phone calls or conflicting system audio events.

### 3. 🎨 Native-Feel User Interface
- Fluid navigation with `@react-navigation/native-stack`.
- High-resolution station artwork cards with real-time streaming state indicators.
- One-tap quick toggle between stations with seamless stream tear-down and handoff.

---

## 💻 Tech Stack & Dependencies

| Layer | Technologies |
| :--- | :--- |
| **Framework** | React Native 0.74 (Hermes JS Engine) |
| **Language** | JavaScript (ESNext) / TypeScript 5.0 |
| **Audio Engine** | `react-native-sound: ^0.11.2` |
| **Navigation** | `@react-navigation/native`, `@react-navigation/native-stack` |
| **Iconography** | `react-native-vector-icons (Ionicons)` |
| **Screen Safety** | `react-native-safe-area-context`, `react-native-screens` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (`>= 18`)
- Android Studio with Android SDK (API 34+) or Xcode (macOS)

### Setup Instructions
```bash
# Clone the repository
git clone https://github.com/itismemuhammadali/SonicWave-Radio-Live.git
cd SonicWave-Radio-Live

# Launch metro bundler
npx react-native start

# Run on target platform
npx react-native run-android   # Android Device / Emulator
npx react-native run-ios       # iOS Simulator
```

---

## 👤 Author

- **Muhammad Ali**
  - **GitHub:** [@itismemuhammadali](https://github.com/itismemuhammadali)
  - **Portfolio:** [Portfolio Platform](https://github.com/itismemuhammadali)
