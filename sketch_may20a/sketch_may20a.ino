extern "C"{
  void test_assembly_function();
}

void setup() {
  // put your setup code here, to run once:
  pinMode(13, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  delay(1000);
  digitalWrite(13, HIGH);
  test_assembly_function();
  delay(1000);
  digitalWrite(13, LOW);
}
