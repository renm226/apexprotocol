const mobileData = {
  name: "MOBILE DEVELOPMENT",
  area: "mobile",
  eyebrow: "iOS · Android · React Native · Flutter · App Architecture · App Store",
  sub: "Build production-grade mobile applications trusted by millions of users. This roadmap covers native iOS development in Swift, native Android in Kotlin, cross-platform approaches with React Native and Flutter, and the full deployment lifecycle — from App Store submission to crash monitoring and analytics. Everything you need to ship and maintain real apps.",
  phases: [
    {
      name: "Mobile Development Fundamentals",
      level: "foundation",
      tagline: "Platform differences and core concepts",
      desc: "Before writing platform-specific code, understand the mobile ecosystem: iOS vs Android differences, app lifecycle, screen densities, user interaction patterns, and distribution models.",
      topics: [
        {
          name: "Mobile Platform Differences",
          tag: "core",
          desc: "iOS: Human Interface Guidelines, sandboxing, App Store review process, Swift/Objective-C ecosystem. Android: Material Design, open ecosystem, Google Play Store, Java/Kotlin ecosystem. Hardware fragmentation (screen sizes, resolutions, CPU architectures, RAM). Distribution: App Store vs Play Store vs enterprise vs sideloading. App Store Connect and Google Play Console.",
          master: [
            "Compare and contrast iOS and Android development approaches",
            "Understand app signing: iOS provisioning profiles vs Android keystores",
            "Explain the app submission process for both stores (screenshots, metadata, review)",
            "Handle different screen sizes using Auto Layout (iOS) and ConstraintLayout (Android)",
            "Implement responsive layouts that adapt to tablet and phone form factors",
            "Understand background execution limits on both platforms",
            "Manage app versions and build numbers following semantic versioning"
          ],
          res: [
            "iOS Human Interface Guidelines (Apple)",
            "Material Design Guidelines (Google)",
            "iOS App Distribution Guide (Apple)",
            "Android App Distribution (Google Play Console docs)"
          ]
        },
        {
          name: "Development Environment",
          tag: "core",
          desc: "Xcode for iOS (project structure, storyboards vs SwiftUI, simulators, instruments). Android Studio for Android (Gradle build system, AVD emulators, layout editor). Version control with Git. Continuous Integration (GitHub Actions, Bitrise, Fastlane). Debugging tools and performance profiling.",
          master: [
            "Set up Xcode with simulators and device provisioning",
            "Configure Android Studio with emulators for different API levels",
            "Understand the build process: compilation, linking, code signing, packaging",
            "Use debugging tools: breakpoints, LLDB/Xcode debugger, Android Studio debugger",
            "Profile app performance with Xcode Instruments and Android Profiler",
            "Set up Fastlane for automated builds and deployment",
            "Configure CI/CD pipeline to run tests and deploy to TestFlight/Beta tracks"
          ],
          res: [
            "Xcode documentation (Apple Developer)",
            "Android Studio documentation (developer.android.com)",
            "Fastlane documentation (fastlane.tools)",
            "Bitrise Mobile CI/CD documentation"
          ]
        },
        {
          name: "App Architecture Patterns",
          tag: "core",
          desc: "MVC (Model-View-Controller) — issues (massive view controller). MVVM (Model-View-ViewModel) with data binding. VIPER (View-Interactor-Presenter-Entity-Router) for clean separation. Redux/Flux pattern (single source of truth). MVI (Model-View-Intent) for reactive architectures. Choosing the right pattern for scale.",
          master: [
            "Implement MVVM with SwiftUI/Combine or Jetpack Compose/Flow",
            "Refactor a massive view controller into VIPER modules",
            "Use dependency injection to decouple components (Swainject, Dagger/Hilt)",
            "Implement a Redux-like state management for mobile apps",
            "Separate business logic from UI using UseCases/Interactors",
            "Implement repository pattern for data layer abstraction",
            "Unit test each layer (ViewModels, Interactors, Repositories)"
          ],
          res: [
            "iOS Architecture Patterns (objc.io)",
            "Android Architecture Guidelines (developer.android.com)",
            "Clean Architecture for Mobile (Robert Martin)",
            "Redux for Mobile (Mobius, ReSwift, ReduxKotlin)"
          ]
        }
      ]
    },
    {
      name: "iOS Development (Swift/SwiftUI)",
      level: "intermediate",
      tagline: "Apple ecosystem mastery",
      desc: "Deep dive into iOS development with Swift and SwiftUI. Understand the platform's unique characteristics, frameworks, and best practices.",
      topics: [
        {
          name: "Swift Language Mastery",
          tag: "core",
          desc: "Swift fundamentals: optionals, closures, protocols, extensions, generics, enums with associated values. Value types vs reference types (struct vs class). Memory management (ARC, weak/unowned references). Error handling (throws, try, catch, Result type). Concurrency: async/await, actors, Task, MainActor. Combine framework for reactive programming.",
          master: [
            "Understand Swift's memory safety and ownership model",
            "Implement custom operators and result builders",
            "Use property wrappers (@State, @Binding, @Published, @Environment)",
            "Master Swift concurrency: async let, TaskGroup, Continuation",
            "Implement protocol-oriented design with associated types",
            "Use Swift Package Manager for dependency management",
            "Optimize performance with copy-on-write semantics"
          ],
          res: [
            "Swift Programming Language (Apple Books — free)",
            "Advanced Swift (objc.io)",
            "Swift by Sundell (blog)",
            "Point-Free (advanced Swift video series)"
          ]
        },
        {
          name: "SwiftUI & UIKit",
          tag: "core",
          desc: "SwiftUI: declarative UI, state management, view composition, modifiers, animation, environment values. NavigationStack, TabView, List, Form. UIKit for complex custom UI: view controllers, table views, collection views, navigation controllers, custom drawing (drawRect, Core Graphics). Bridging UIKit and SwiftUI (UIViewRepresentable, UIViewControllerRepresentable).",
          master: [
            "Build a complete SwiftUI app with navigation, forms, and lists",
            "Implement custom transitions and animations in SwiftUI",
            "Use UIKit components not yet in SwiftUI via representables",
            "Master Auto Layout programmatically and in Interface Builder",
            "Implement dynamic type and dark mode support",
            "Build reusable SwiftUI components with ViewBuilder",
            "Optimize List and CollectionView performance for large data sets"
          ],
          res: [
            "SwiftUI documentation (Apple Developer)",
            "UIKit documentation (Apple Developer)",
            "SwiftUI by Tutorials (raywenderlich.com)",
            "Hacking with Swift (Paul Hudson)"
          ]
        },
        {
          name: "iOS System Frameworks",
          tag: "advanced",
          desc: "Core Data for persistence (NSPersistentContainer, fetch requests, relationships, migrations). UserDefaults and Keychain for small data. FileManager for document storage. Networking: URLSession, Codable, async/await networking. Push notifications (APNs), UserNotifications framework. Core Location and MapKit. Camera and Photos framework. Core Motion (accelerometer, gyroscope).",
          master: [
            "Implement Core Data with CloudKit synchronization",
            "Build offline-first app with local persistence and background sync",
            "Handle push notifications with custom payloads and actions",
            "Implement background fetch and background tasks",
            "Use Core Location for geofencing and significant location changes",
            "Build camera app with photo capture, filtering, and sharing",
            "Implement biometric authentication (Face ID/Touch ID)"
          ],
          res: [
            "iOS Programming: The Big Nerd Ranch Guide",
            "Core Data by Tutorials (raywenderlich.com)",
            "Apple Developer Documentation (developer.apple.com)",
            "WWDC videos (Apple Developer app)"
          ]
        }
      ]
    },
    {
      name: "Android Development (Kotlin/Jetpack)",
      level: "intermediate",
      tagline: "Google ecosystem mastery",
      desc: "Deep dive into Android development with Kotlin and Jetpack. Understand Android's unique challenges (fragmentation, lifecycle, permissions) and modern solutions.",
      topics: [
        {
          name: "Kotlin Language Mastery",
          tag: "core",
          desc: "Kotlin fundamentals: null safety, data classes, sealed classes, extension functions, higher-order functions, coroutines (launch, async, withContext), flows (StateFlow, SharedFlow). Kotlin DSLs. Interoperability with Java. Kotlin Multiplatform Mobile (KMM) for shared code between iOS and Android.",
          master: [
            "Understand Kotlin's type system and null safety features",
            "Implement coroutines for structured concurrency",
            "Use Flow for reactive streams with backpressure handling",
            "Write Kotlin DSL for configuration and UI building",
            "Implement inline classes for type safety without overhead",
            "Use Kotlin reflection for dependency injection at runtime",
            "Share business logic between iOS and Android with KMM"
          ],
          res: [
            "Kotlin Documentation (kotlinlang.org)",
            "Kotlin Coroutines Guide (kotlinlang.org)",
            "Atomic Kotlin (Bruce Eckel, Svetlana Isakova)",
            "Kotlin in Action (Dmitry Jemerov, Svetlana Isakova)"
          ]
        },
        {
          name: "Android Jetpack",
          tag: "core",
          desc: "Lifecycle components: ViewModel, LiveData, LifecycleObserver. Navigation component for fragment transitions. Room database (SQLite abstraction). DataStore (Preferences and Proto). WorkManager for background tasks. Paging library for large datasets. Compose UI toolkit (declarative UI). Hilt for dependency injection.",
          master: [
            "Implement MVVM with ViewModel, LiveData/Flow, and Repository",
            "Use Room with type converters and relationships",
            "Schedule reliable background work with WorkManager",
            "Build declarative UI with Jetpack Compose",
            "Implement dependency injection with Dagger Hilt",
            "Handle configuration changes without losing state",
            "Use Navigation component with deep linking"
          ],
          res: [
            "Android Developer Documentation (developer.android.com)",
            "Android Jetpack documentation (developer.android.com/jetpack)",
            "Now in Android (sample app by Google)",
            "Android Developers Blog (android-developers.googleblog.com)"
          ]
        },
        {
          name: "Android System Integration",
          tag: "advanced",
          desc: "Permissions model (runtime permissions, dangerous vs normal). Intents (explicit, implicit, intent filters). Services (foreground, background, bound). Broadcast receivers. Content providers for data sharing. Notifications (channels, styles, actions). Media playback (ExoPlayer). CameraX. Sensors API. Firebase integration (Analytics, Crashlytics, Cloud Messaging).",
          master: [
            "Handle runtime permissions correctly for Android 6.0 to 14",
            "Implement foreground service with persistent notification",
            "Share data between apps using ContentProvider",
            "Build media player with ExoPlayer and MediaSession",
            "Integrate Firebase services (Analytics, Crashlytics, Remote Config)",
            "Implement deep linking with App Links and intent filters",
            "Handle different Android versions and API level differences"
          ],
          res: [
            "Android Programming: The Big Nerd Ranch Guide",
            "Efficient Android Threading (Anders Goransson)",
            "Android API Guides (developer.android.com/guide)",
            "Android Performance Patterns (YouTube series)"
          ]
        }
      ]
    },
    {
      name: "Cross-Platform Development",
      level: "advanced",
      tagline: "Write once, run anywhere",
      desc: "Master cross-platform frameworks to build apps for both iOS and Android from a single codebase. React Native, Flutter, and their trade-offs.",
      topics: [
        {
          name: "React Native",
          tag: "advanced",
          desc: "React Native architecture: bridge, Fabric, TurboModules, Hermes. JSX and React patterns (components, hooks, state management, effects). Navigation (React Navigation). Styling (StyleSheet, Flexbox). Native modules (bridging to iOS/Android). Performance optimization: FlatList, memoization, interaction manager. Expo for rapid development.",
          master: [
            "Build production React Native app with TypeScript",
            "Implement navigation with deep linking and authentication flows",
            "Manage global state with Redux Toolkit or Zustand",
            "Write native modules for platform-specific functionality",
            "Optimize list rendering with FlatList and FlashList",
            "Handle offline sync and local storage (AsyncStorage, SQLite, Realm)",
            "Deploy to App Store and Play Store with Fastlane"
          ],
          res: [
            "React Native documentation (reactnative.dev)",
            "Expo documentation (docs.expo.dev)",
            "React Native by Example",
            "The Complete React Native Course (online platforms)"
          ]
        },
        {
          name: "Flutter",
          tag: "advanced",
          desc: "Flutter architecture: Dart language, widget tree, element tree, render tree, Skia rendering engine. StatelessWidget vs StatefulWidget. State management: Provider, Riverpod, BLoC, GetX. Navigation 2.0 (Router). Custom painting and animations. Platform channels for native code integration. Flutter Web and Desktop.",
          master: [
            "Build Flutter app with clean architecture layers",
            "Implement BLoC pattern for reactive state management",
            "Create custom animations with AnimatedBuilder and Tween",
            "Use Platform Channel to call platform-specific code",
            "Implement deep linking and dynamic links",
            "Handle forms, validation, and text input",
            "Optimize performance with const widgets and listView.builder"
          ],
          res: [
            "Flutter documentation (flutter.dev)",
            "Flutter in Action (Eric Windmill)",
            "Dart language tour (dart.dev)",
            "Flutter Community articles (medium.com/flutter-community)"
          ]
        },
        {
          name: "Cross-Platform Trade-offs",
          tag: "advanced",
          desc: "When to choose native vs cross-platform. Performance differences: React Native (bridge overhead), Flutter (compiled to native, Skia). Access to platform APIs (native modules/plugins). UI fidelity (Material/Cupertino widgets). Development velocity. Team skills. App size considerations. Long-term maintenance.",
          master: [
            "Compare performance benchmarks between native, RN, and Flutter",
            "Evaluate if cross-platform meets app requirements (heavy animations, background tasks)",
            "Implement fallback strategies for platform-specific features",
            "Manage shared vs platform-specific code organization",
            "Handle native dependencies and plugin compatibility",
            "Evaluate app size impact of each framework",
            "Plan migration strategy from cross-platform to native if needed"
          ],
          res: [
            "React Native vs Flutter vs Native (industry comparison articles)",
            "Framework benchmark studies (GitHub repositories)",
            "Case studies from Uber, Airbnb, Discord (technology choices)",
            "Cross-Platform Development Patterns (Google I/O, WWDC talks)"
          ]
        }
      ]
    },
    {
      name: "Mobile App Deployment & Maintenance",
      level: "advanced",
      tagline: "Ship to millions",
      desc: "Master the complete app lifecycle from development to production. App store submission, beta testing, monitoring, crash reporting, and user analytics.",
      topics: [
        {
          name: "App Store & Play Store Submission",
          tag: "core",
          desc: "App Store Connect: certificates, identifiers, profiles, TestFlight internal/external testing, app review guidelines, pricing, subscriptions. Google Play Console: keystore signing, internal/closed/open testing tracks, pre-launch report, content rating, store listing optimization (ASO). App privacy labels and data safety section. Compliance: GDPR, CCPA, COPPA.",
          master: [
            "Prepare complete app store metadata (screenshots, description, keywords)",
            "Configure TestFlight for internal and external beta testing",
            "Set up Google Play Console for open, closed, and internal testing tracks",
            "Implement App Tracking Transparency (iOS 14+)",
            "Handle app store rejection and appeal process",
            "Set up phased rollout for Play Store releases",
            "Implement in-app purchases and subscriptions with receipt validation"
          ],
          res: [
            "App Store Review Guidelines (Apple)",
            "Google Play Developer Policy Center",
            "App Store Connect Help (Apple)",
            "Android App Bundle documentation (developer.android.com)"
          ]
        },
        {
          name: "App Monitoring & Analytics",
          tag: "advanced",
          desc: "Crash reporting: Crashlytics (Firebase), Sentry, Bugsnag. Performance monitoring: Firebase Performance, New Relic, AppDynamics. Analytics: Firebase Analytics, Mixpanel, Amplitude. User session recording, funnels, retention cohorts. A/B testing with Firebase Remote Config. Real-time user feedback and in-app surveys.",
          master: [
            "Integrate Firebase Crashlytics and analyze crash reports",
            "Set up custom events and user properties for analytics",
            "Implement remote configuration for feature flags and A/B tests",
            "Monitor app performance (startup time, frame drops, network latency)",
            "Set up alerts for crash rate thresholds and ANRs",
            "Analyze user retention and conversion funnels",
            "Implement GDPR-compliant analytics (opt-in/opt-out)"
          ],
          res: [
            "Firebase documentation (firebase.google.com/docs)",
            "Amplitude documentation (amplitude.com/docs)",
            "Mixpanel documentation (mixpanel.com/docs)",
            "Mobile App Analytics Guide (Branch.io)"
          ]
        },
        {
          name: "App Security & Hardening",
          tag: "advanced",
          desc: "Secure data storage: Keychain (iOS), EncryptedSharedPreferences/Keystore (Android). Certificate pinning (SSL/TLS). Obfuscation: ProGuard/R8 (Android), LLVM obfuscation (iOS). Jailbreak/root detection. Runtime application self-protection (RASP). API security: tokens, OAuth2, refresh tokens. Secure communication: HTTPS, App Transport Security. Code signing and app integrity.",
          master: [
            "Implement certificate pinning with Alamofire/URLSession or OkHttp",
            "Store sensitive data in Keychain/Keystore, never in UserDefaults/SharedPreferences",
            "Implement jailbreak/root detection with multiple checks",
            "Obfuscate code with ProGuard and string encryption",
            "Validate receipt for in-app purchases to prevent piracy",
            "Implement runtime integrity checks (anti-debugging, anti-hooking)",
            "Conduct security audit: static analysis, dynamic analysis, penetration testing"
          ],
          res: [
            "OWASP Mobile Security Testing Guide",
            "iOS Security Guide (Apple)",
            "Android Security Documentation (developer.android.com/security)",
            "Mobile App Security (Milan Bhardwaj, Zubin Irani)"
          ]
        }
      ]
    }
  ]
};