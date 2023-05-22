import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_storage/firebase_storage.dart';

class FirebaseHelper 
{
  final auth = FirebaseAuth.instance;
  final cloudUsers = FirebaseFirestore.instance.collection("users");
  final storage = FirebaseStorage.instance;

  register(String lastname, String firstname, String email, String password) async {
    UserCredential userCredential = await auth.createUserWithEmailAndPassword(email: email, password: password);    
    String uid = userCredential.user!.uid;

    Map<String, dynamic> map = {
      'lastname': lastname,
      'firstname': firstname,
      'email': email,
    };

    addUser(uid, map);
  }

  addUser(String uid, Map<String, dynamic> map) {
    cloudUsers.doc(uid).set(map);
  }
}