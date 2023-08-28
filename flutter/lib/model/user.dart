import 'package:cloud_firestore/cloud_firestore.dart';

class User
{
  late String id;
  late String lastname;
  late String firstname;
  late String email;
  String? username;
  String? avatar;

  // Constructors
  User() {
    id = "";
    lastname = "";
    firstname = "";
    email = "";
  }

  User.firebase(DocumentSnapshot snapshot) {
    id = snapshot.id;
    // Transform data into a dictionary
    Map<String, dynamic> map = snapshot.data() as Map<String, dynamic>;
    lastname = map['lastname'];
    firstname = map['firstname'];
    email = map['email'];
    username = map['username'];
    avatar = map['avatar'];
  }
}