class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.datetime :start_time, :end_time
      t.string :appointment_type, :subject
      t.text :body
      t.timestamps null: false
    end

    Appointment.create!(
      user_id: User.first.id,
      start_time: Time.now - 2.hours,
      end_time: Time.now - 1.hour,
      appointment_type: "Clinic",
      subject: "Urology clinic",
      body: "Appointment to get scan results"
    )
  end
end
