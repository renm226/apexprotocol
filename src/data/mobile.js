export const mobileData = {
  name: "MOBILE DEVELOPMENT",
  area: "mobile",
  eyebrow: "iOS · Android · Swift · Kotlin · React Native · Flutter · App Architecture",
  sub: "Mobile development is one of the most demanding platforms in software engineering — you are constrained by CPU budgets that drain batteries, memory limits that trigger OOM kills, network conditions ranging from gigabit WiFi to intermittent 2G, and users who will uninstall your app after one crash. This roadmap treats mobile development as the serious engineering discipline it is.",
  phases: [
    {
      name: "Mobile Platform Fundamentals",
      level: "foundation",
      tagline: "Mobile is not just a small screen — it is a completely different execution environment",
      desc: "A mobile application runs in a resource-constrained environment with distinct lifecycle management that has no equivalent on desktop or server. The application can be backgrounded, terminated by the OS under memory pressure, or resumed from a suspended state at any time. Every architectural decision must account for this lifecycle. Ignoring it produces apps that lose user data, consume battery in the background, and crash unpredictably.",
      topics: [
        {
          name: "App Lifecycle and Process Model",
          tag: "core",
          desc: "On iOS, an app transitions through states: Not Running, Inactive, Active, Background, and Suspended. The OS can terminate a suspended app at any time without notification — your app cannot prevent this, only handle it gracefully. AppDelegate and SceneDelegate handle lifecycle events. Background execution is limited: apps must request background modes explicitly (location, audio, background fetch) and they are time-limited. NSUserActivity and scene restoration are the mechanisms for restoring UI state after termination. On Android, an Activity has its own lifecycle: onCreate, onStart, onResume, onPause, onStop, onDestroy. The Android OS can also kill processes under memory pressure — but Android differentiates priority levels (foreground, visible, service, cached) and kills in reverse priority order. ViewModel survives configuration changes (screen rotation) but not process death — use SavedStateHandle for data that must survive process death. Understanding the difference between onPause (may be brief, reversible) and onStop (may be followed by onDestroy) is the foundation of correct lifecycle management.",
          master: [
            "Draw the iOS app lifecycle state machine and describe what code belongs in each transition",
            "Explain the Android Activity lifecycle: what happens at each callback and common mistakes at each transition",
            "Describe the difference between ViewModel (survives configuration changes) and SavedStateHandle (survives process death)",
            "Implement state restoration for a complex UI — describe what state must be persisted versus what can be reconstructed",
            "Explain background execution constraints on iOS and Android: what is allowed, for how long, and what happens when limits are exceeded",
            "Describe the Low Memory Warning on iOS: what triggers it, what the app should do, and what happens if it ignores it"
          ],
          res: [
            "Apple Developer Documentation — UIApplicationDelegate and UISceneDelegate lifecycle",
            "Android Developer Guide — Activity Lifecycle (developer.android.com)",
            "iOS App Programming Guide (Apple) — background execution section",
            "Modern Android Development codelabs (developer.android.com/codelabs) — structured Android fundamentals"
          ]
        },
        {
          name: "Memory Management on Mobile",
          tag: "core",
          desc: "Mobile apps run under strict memory budgets. iOS apps that exceed their memory limit are terminated by the OS — there is no swap. The memory limit varies by device (older devices have less RAM, lower limits). ARC (Automatic Reference Counting) on iOS manages object lifetimes: a strong reference increments the retain count, releasing it decrements it, the object is deallocated when the count reaches zero. Retain cycles: two objects hold strong references to each other — neither can be deallocated. The solution is to make one reference weak. Common retain cycle patterns: a closure capturing self strongly when the closure is stored by self, delegates declared as strong references. On Android, the garbage collector handles most memory management, but image loading is the primary source of OOM crashes — loading a full-resolution camera image into an ImageView without downsampling can use hundreds of MB. Memory leaks in Android: Activities retained by callbacks, background tasks holding references to Contexts that have been destroyed, long-lived Singletons holding Activity references. Tools: Xcode's Memory Graph Debugger and Instruments for iOS; Android Studio's Memory Profiler and LeakCanary for Android.",
          master: [
            "Explain ARC: how retain counts work, when objects are deallocated, and what weak and unowned references do",
            "Identify and fix a retain cycle involving a closure that captures self strongly",
            "Describe the Android garbage collector and why it does not prevent all memory leaks",
            "Diagnose an Activity memory leak caused by a callback holding a Context reference",
            "Explain how to load images correctly on both platforms: downsampling, caching, and memory estimation",
            "Use Xcode Instruments or Android Studio Memory Profiler to identify a memory leak"
          ],
          res: [
            "ARC Programming Guide (Apple Developer Documentation) — the authoritative ARC reference",
            "LeakCanary documentation (square.github.io/leakcanary) — Android memory leak detection",
            "WWDC sessions on memory management (developer.apple.com/videos) — practical iOS guidance",
            "Android Memory Management documentation (developer.android.com)"
          ]
        }
      ]
    },
    {
      name: "iOS Development",
      level: "intermediate",
      tagline: "One platform, one language, one opinionated framework — master the opinions",
      desc: "iOS development is opinionated: Apple defines the patterns, the tools, and increasingly the language. Resistance to Apple's architectural preferences costs significant effort for little gain. The engineers who are most productive on iOS are the ones who understand the rationale behind SwiftUI's data flow model and UIKit's view controller lifecycle rather than fighting them.",
      topics: [
        {
          name: "Swift: The Language in Depth",
          tag: "core",
          desc: "Swift's type system is one of the most expressive in mainstream languages. Optionals encode the possibility of absence in the type — nil is not a special value that can appear in any variable, it is a type-level distinction. Forced unwrapping (!) is a code smell in production code: it crashes at runtime when the optional is nil. Optional chaining, if-let binding, guard-let, and the nil-coalescing operator are the correct patterns. Value types (struct, enum) copy on assignment — there is no aliasing problem, mutations do not propagate unexpectedly. Reference types (class) share identity — mutations are visible to all holders of the reference. Protocol-oriented programming: defining capabilities as protocols and implementing them on types gives you polymorphism without inheritance hierarchy. Swift concurrency (async/await, actors) replaced the callback pyramid that made asynchronous iOS code difficult to read. Actors protect mutable state from data races by serializing access — the compiler enforces this. Sendable marks types that are safe to send across concurrency boundaries.",
          master: [
            "Explain Swift optionals at the type level: why nil safety requires optional types and the four patterns for safe unwrapping",
            "Describe value types versus reference types: what copy-on-write means for performance, and when to use class versus struct",
            "Explain Swift concurrency: how async/await works and what actors solve that DispatchQueue cannot",
            "Describe the Sendable protocol: what it marks and why the compiler enforces it for concurrency safety",
            "Implement a protocol with associated types and explain why this is more powerful than a generic class hierarchy",
            "Explain Swift's memory ownership model: how ARC integrates with Swift concurrency and where retain cycles still occur"
          ],
          res: [
            "The Swift Programming Language (Apple) — free at docs.swift.org, the authoritative reference",
            "Swift by Sundell (swiftbysundell.com) — practical Swift patterns from experienced practitioners",
            "WWDC sessions on Swift concurrency (developer.apple.com/videos) — the official model explanation",
            "Swift Evolution proposals (github.com/apple/swift-evolution) — understand why language features exist"
          ]
        },
        {
          name: "UIKit and SwiftUI",
          tag: "intermediate",
          desc: "UIKit is the imperative UI framework that has powered iOS since 2008. View controllers manage a view hierarchy and respond to lifecycle events. Auto Layout uses constraint equations to define the geometry of views relative to each other and to their containers — understanding the constraint solver's behavior (especially when constraints conflict or are ambiguous) is essential. Table views and collection views display large datasets efficiently through cell reuse — cells are dequeued rather than created fresh, and only cells visible on screen are in memory. SwiftUI is the declarative framework introduced in 2019: views are functions of state. When state changes, SwiftUI re-renders the view tree. The data flow model: @State for local view state, @Binding for mutable state passed to children, @ObservedObject and @StateObject for reference types that should trigger re-renders, @EnvironmentObject for state shared across a view hierarchy. SwiftUI's rendering is diffing — it compares the new view tree to the old one and only updates what changed. Using identity correctly (Identifiable conformance, the id modifier) is essential for correct animations and efficient updates.",
          master: [
            "Explain UIKit's view controller hierarchy and how view controller containment works",
            "Debug an Auto Layout constraint conflict: describe your approach to diagnosing and fixing it",
            "Explain UITableView cell reuse: why it is necessary, how the dequeue mechanism works, and what must be reset in prepareForReuse",
            "Explain SwiftUI's data flow model: when to use @State, @Binding, @StateObject, and @EnvironmentObject",
            "Describe the Coordinator pattern for navigation in UIKit and explain why it exists",
            "Explain SwiftUI view identity: how @State is associated with a specific view instance across re-renders"
          ],
          res: [
            "Hacking with Swift (Paul Hudson) — comprehensive iOS tutorials, free online",
            "Apple Human Interface Guidelines — understand the design principles behind the framework",
            "WWDC SwiftUI sessions — the framework authors explain architectural decisions",
            "Point-Free (pointfree.co) — functional programming patterns in Swift and SwiftUI"
          ]
        }
      ]
    },
    {
      name: "Android Development",
      level: "intermediate",
      tagline: "The most diverse platform in the world, unified by a single architecture",
      desc: "Android runs on thousands of device configurations with wildly varying hardware capabilities. Modern Android development has converged on a set of opinionated architectural patterns (Jetpack) that solve the fragmentation and lifecycle problems that plagued early Android development. Learning the Jetpack architecture correctly is faster than learning the old approaches and then migrating.",
      topics: [
        {
          name: "Kotlin for Android",
          tag: "core",
          desc: "Kotlin is the primary language for Android development. Null safety is the most immediately impactful feature: non-null types are the default, nullable types require explicit declaration with ?, and the compiler enforces null checks before accessing nullable values. Coroutines are Kotlin's concurrency model: suspend functions can pause and resume without blocking a thread, allowing asynchronous code to be written sequentially. Coroutine scopes (viewModelScope, lifecycleScope) tie coroutine lifetimes to component lifetimes — a coroutine in viewModelScope is cancelled when the ViewModel is cleared, preventing work from running after the component is gone. Flow is the reactive streams implementation: cold flows emit values on demand, hot flows (StateFlow, SharedFlow) maintain state. Extension functions add methods to existing classes without inheritance — they are resolved statically, which means they are not polymorphic and cannot override existing methods. Data classes provide structural equality by default — two data class instances with the same field values are equal.",
          master: [
            "Explain Kotlin null safety: the difference between T, T?, T!!, and how the compiler enforces null checks",
            "Explain coroutine scopes: why viewModelScope and lifecycleScope exist and what happens to work when they are cancelled",
            "Describe the difference between suspend functions, Flow, StateFlow, and SharedFlow — when each is the right abstraction",
            "Explain structured concurrency in Kotlin: why all coroutines have a parent and what happens when a parent is cancelled",
            "Describe Kotlin extension functions: how they are resolved and the key difference from methods in an inheritance hierarchy",
            "Implement a StateFlow-backed ViewModel and explain how the UI observes it correctly through lifecycle changes"
          ],
          res: [
            "Kotlin documentation (kotlinlang.org) — the authoritative reference",
            "Kotlin Coroutines documentation — the concurrency model",
            "Kotlin for Android Developers (Antonio Leiva) — Android-focused Kotlin guide",
            "Android Developer Kotlin guides (developer.android.com/kotlin) — practical patterns"
          ]
        },
        {
          name: "Jetpack Architecture and Compose",
          tag: "intermediate",
          desc: "The Android Architecture Components define the modern Android architecture: ViewModel (holds UI state, survives configuration changes), LiveData/Flow (observable data streams), Room (SQLite abstraction with compile-time query verification), Navigation (handles back stack and deep links with a graph), and Hilt (dependency injection). The recommended architecture: UI layer (Composables or Views) observes ViewModel, ViewModel holds UI state and calls Repository, Repository abstracts data sources (network API, local database). Jetpack Compose is Android's declarative UI toolkit, similar to SwiftUI. Composable functions describe UI as a function of state. Recomposition: when state changes, Compose re-executes the affected composable functions. Understanding what triggers recomposition and how to minimize unnecessary recomposition (stable types, remember, derivedStateOf) is essential for performance. The Navigation Compose library manages back stack, deep links, and argument passing between composable screens.",
          master: [
            "Describe the recommended Android app architecture: layers, data flow, and the role of each layer",
            "Explain the difference between ViewModel state that survives configuration changes and state that survives process death",
            "Explain Compose recomposition: what triggers it, how to minimize it, and what stable versus unstable types mean",
            "Implement a Room database with a DAO, query it in a ViewModel with Flow, and observe it in a Composable",
            "Describe Hilt dependency injection: what it provides over manual DI and how the component hierarchy works",
            "Explain Navigation Compose: how the back stack works, how to pass arguments, and how to handle deep links"
          ],
          res: [
            "Android Architecture Guide (developer.android.com/topic/architecture) — the official architecture documentation",
            "Jetpack Compose documentation — the complete Compose reference",
            "Android Room documentation — database patterns",
            "Now in Android sample app (github.com/android/nowinandroid) — the reference implementation of modern Android architecture"
          ]
        }
      ]
    },
    {
      name: "Cross-Platform Development",
      level: "intermediate",
      tagline: "Write once, run everywhere — with exceptions that matter",
      desc: "Cross-platform frameworks allow sharing code between iOS and Android. The promise of write-once-run-everywhere has historically overstated the savings and understated the costs. Modern frameworks (React Native, Flutter) have improved significantly but still require native knowledge to debug platform-specific issues, access platform APIs not yet wrapped, and optimize for each platform's performance model.",
      topics: [
        {
          name: "React Native",
          tag: "intermediate",
          desc: "React Native renders native UI components using JavaScript logic connected to native thread via the bridge. The new architecture (introduced incrementally from 2022) replaces the bridge with JSI (JavaScript Interface), enabling synchronous calls between JavaScript and native code. Hermes is the JavaScript engine optimized for React Native — it enables fast startup and lower memory usage compared to V8. The component model mirrors React: functional components, hooks, same data flow. Navigation is handled by React Navigation — Stack, Tab, and Drawer navigators. Platform-specific code: the Platform module checks OS at runtime; .ios.ts and .android.ts file suffixes allow entirely different implementations per platform. Native modules: when the JavaScript layer cannot access a platform API, a native module wraps the platform API and exposes it to JavaScript. Writing a native module requires knowledge of Swift/ObjC and Java/Kotlin. Metro is the bundler. Performance: heavy computation should run in a Web Worker (via react-native-reanimated for animations) or in native code — running on the JavaScript thread causes frame drops.",
          master: [
            "Explain the React Native architecture: JS thread, native thread, and how the bridge versus JSI changes their interaction",
            "Describe the React Native performance bottlenecks and explain what causes dropped frames",
            "Implement a platform-specific feature using both the Platform module and the file suffix approach",
            "Explain when a native module is necessary and describe the steps to write one",
            "Set up React Navigation with nested navigators and handle deep links",
            "Describe the Hermes engine: what it optimizes for and how it differs from V8"
          ],
          res: [
            "React Native documentation (reactnative.dev) — the primary reference",
            "React Navigation documentation (reactnavigation.org) — the standard navigation library",
            "React Native New Architecture documentation — JSI and the new rendering system",
            "Callstack blog — practical React Native performance and architecture articles"
          ]
        },
        {
          name: "Flutter",
          tag: "intermediate",
          desc: "Flutter takes a different approach from React Native: instead of wrapping native UI components, Flutter draws all UI using its own rendering engine (Skia, replaced by Impeller). This provides pixel-perfect consistency across platforms and eliminates the entire class of issues caused by native component differences, but means the UI does not use native components — it looks like Flutter, not like iOS or Android. Dart is the programming language. Flutter uses a reactive widget tree: StatelessWidget for immutable UI, StatefulWidget for UI that changes over time. State management is a well-documented challenge in Flutter: setState works for simple local state, Provider/Riverpod for shared state across the widget tree, Bloc/Cubit for explicit state machines with clear separation of UI and business logic. The widget tree is composed of three trees: the widget tree (immutable, rebuilt frequently), the element tree (manages lifecycle), and the render object tree (handles layout and painting). Understanding this distinction explains why Flutter can rebuild many widgets per frame efficiently.",
          master: [
            "Explain Flutter's rendering model: why it draws its own UI instead of using native components",
            "Describe the three Flutter trees: widget, element, and render object — what each manages and why the separation exists",
            "Compare state management approaches: when setState, Provider, Riverpod, and Bloc are each appropriate",
            "Explain Flutter keys: why they exist and when they are required for correct widget identity",
            "Implement a feature using Bloc: define states, events, the bloc itself, and the UI — explain each component",
            "Describe Flutter's approach to platform integration: platform channels and how they compare to React Native native modules"
          ],
          res: [
            "Flutter documentation (flutter.dev/docs) — start with the architecture overview",
            "Flutter Riverpod documentation — the modern state management solution",
            "Very Good Ventures Flutter blog — opinionated, practical, senior-level Flutter guidance",
            "Bloclibrary.dev documentation — Bloc pattern for Flutter"
          ]
        }
      ]
    },
    {
      name: "Mobile Architecture and Offline-First Design",
      level: "advanced",
      tagline: "Network connectivity is a convenience, not a guarantee",
      desc: "Production mobile apps are used on unreliable networks, in airplane mode, and in poor signal conditions. An app that requires a network connection for every interaction is an app that fails frequently on mobile. Offline-first design treats the local database as the source of truth and the network as a synchronization mechanism. This is harder to build but dramatically improves user experience in real-world conditions.",
      topics: [
        {
          name: "Offline-First Architecture",
          tag: "advanced",
          desc: "In an offline-first architecture, the local database is the primary source of truth. When the user takes an action, it is written to the local database immediately — the UI reflects the change instantly. In the background, the app synchronizes changes to the server and resolves conflicts. The user never waits for a network round-trip for basic operations. Conflict resolution: when the same data is modified on the device and on the server while offline, conflicts must be resolved. Strategies: last-write-wins (simple but loses data), operational transforms (correct for text, complex to implement), and CRDTs (Conflict-free Replicated Data Types — mathematically guaranteed to converge). Optimistic updates: apply the change to the local state immediately and show success to the user, then sync in the background. If the sync fails, roll back with an explanation. The complexity is in the rollback logic — a failed network request after the user has continued making dependent actions is difficult to unwind cleanly.",
          master: [
            "Design an offline-first architecture for a task management app: what is stored locally, how sync works, and how conflicts are resolved",
            "Explain last-write-wins, operational transforms, and CRDTs: the correctness and complexity trade-off for each",
            "Implement optimistic updates for a mutation: immediate local update, background sync, and rollback on failure",
            "Describe the sync queue pattern: how to handle retries, ordering, and deduplication of pending server operations",
            "Explain what happens when a user's offline changes conflict with changes made by another user or admin",
            "Describe how to test offline behavior: simulate network conditions and verify state consistency"
          ],
          res: [
            "Offline First (offlinefirst.org) — the community and case studies",
            "CRDTs: The Hard Parts (Martin Kleppmann talk) — the best explanation of CRDT trade-offs",
            "Realm database documentation — the standard mobile offline-first database",
            "Room + WorkManager pattern (Android) — background sync implementation"
          ]
        }
      ]
    },
    {
      name: "Performance, Testing, and Release",
      level: "advanced",
      tagline: "Shipped is not the same as done",
      desc: "The work after initial development — performance profiling, automated testing, crash monitoring, and app store distribution — is where most engineers underinvest. An app with no automated tests cannot be safely refactored. An app with no crash monitoring has an unknown reliability level. An app without performance profiling will have a 3-star average rating from users on older devices.",
      topics: [
        {
          name: "Testing Mobile Applications",
          tag: "advanced",
          desc: "Mobile testing has three layers: unit tests (fast, no UI, no network, no device), integration tests (test component interactions in isolation), and UI tests (end-to-end on a simulator or real device). UI tests are the slowest and most fragile — they interact with the app through the accessibility tree, and any UI change can break them. XCTest and XCUITest on iOS; JUnit and Espresso on Android. Snapshot testing captures the rendered output of a component and compares it to a stored snapshot — it catches unintended visual regressions but requires updating snapshots when intentional UI changes are made. Test parallelization on CI requires careful test isolation — tests that share state or depend on execution order produce intermittent failures. Firebase Test Lab and Browserstack provide real device testing at scale. Mocking network requests: URLProtocol on iOS, OkHttp MockWebServer on Android, or MSW (for React Native).",
          master: [
            "Design a testing strategy for a mobile app: what to test at each layer and why",
            "Write a unit test for a ViewModel or Presenter that has network dependencies — mock the dependency correctly",
            "Explain XCUITest and Espresso: how they interact with the UI through the accessibility tree",
            "Describe snapshot testing: what it catches, what it misses, and how to manage snapshot updates in CI",
            "Implement a test that verifies correct behavior under offline conditions",
            "Explain how to isolate tests that require a database: setup and teardown strategies"
          ],
          res: [
            "iOS Testing with XCTest (Apple Documentation) — the official testing guide",
            "Android Testing Guide (developer.android.com/training/testing) — the official testing documentation",
            "Testing in Compose (developer.android.com/jetpack/compose/testing) — Compose-specific testing",
            "Testing React Native apps (reactnative.dev/docs/testing) — RN testing patterns"
          ]
        },
        {
          name: "App Store Distribution and Analytics",
          tag: "advanced",
          desc: "Distribution requires more than uploading a binary. Code signing on iOS: the provisioning profile binds the app ID, signing certificate, and allowed devices. App Store Connect manages the submission process, TestFlight for internal and external beta testing, and metadata (screenshots, descriptions, keywords) that determines discoverability. The App Store review process rejects apps for privacy violations, broken functionality, and guideline violations — each category has specific rules. Google Play handles Android distribution: track management (internal, closed testing, open testing, production) allows controlled rollouts. Automated release pipelines using Fastlane reduce the manual work of building, signing, and distributing. Crash reporting: Crashlytics or Sentry captures crashes with device state and stack traces — a crash rate above 0.5% is typically considered poor. Analytics: Firebase Analytics or Amplitude for event-based user behavior tracking. The event taxonomy matters — poorly named or inconsistently tracked events are useless for analysis.",
          master: [
            "Explain iOS code signing: what a certificate, provisioning profile, and entitlements each control",
            "Describe the App Store review process: what gets rejected and how to write an effective rejection response",
            "Set up Fastlane to automate building, signing, and distributing a release — explain each lane",
            "Interpret crash reports: stack symbolication, error clustering, and prioritization by impact",
            "Design an analytics event taxonomy for a feature and explain what metrics will answer product questions",
            "Implement a staged rollout on Google Play and define what metrics trigger a rollout pause"
          ],
          res: [
            "Fastlane documentation (fastlane.tools) — the standard automation tool",
            "App Store Review Guidelines (developer.apple.com) — read the actual guidelines",
            "Firebase Crashlytics documentation — crash reporting setup and interpretation",
            "Google Play Console Help — distribution and release management"
          ]
        }
      ]
    }
  ]
}
