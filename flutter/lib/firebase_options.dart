import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyA56-qg7hlSpJfuJzhns2oFJeR0q9_gxs4',
    appId: '1:61941030057:web:3365685689f64687d79db8',
    messagingSenderId: '61941030057',
    projectId: 'flutter-39327',
    authDomain: 'flutter-39327.firebaseapp.com',
    storageBucket: 'flutter-39327.appspot.com',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyDo4hJ9O5runGrlYFMviOQAc_QCIf_sYgk',
    appId: '1:61941030057:android:7947b0a91baf2f16d79db8',
    messagingSenderId: '61941030057',
    projectId: 'flutter-39327',
    storageBucket: 'flutter-39327.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyCZV19D2bgTTxvjYSIr1VuTyUrBz7GMhHE',
    appId: '1:61941030057:ios:12491654f59c4324d79db8',
    messagingSenderId: '61941030057',
    projectId: 'flutter-39327',
    storageBucket: 'flutter-39327.appspot.com',
    iosClientId: '61941030057-qttsob0i8634e0itif8ett31vponcbkb.apps.googleusercontent.com',
    iosBundleId: 'cosmeak.dev.flutterCours',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyCZV19D2bgTTxvjYSIr1VuTyUrBz7GMhHE',
    appId: '1:61941030057:ios:12a0472e34c4f9a9d79db8',
    messagingSenderId: '61941030057',
    projectId: 'flutter-39327',
    storageBucket: 'flutter-39327.appspot.com',
    iosClientId: '61941030057-l3nt1civmpigqi7e7aqg4qnmro5hhrj1.apps.googleusercontent.com',
    iosBundleId: 'cosmeak.dev.flutterCours.RunnerTests',
  );
}
