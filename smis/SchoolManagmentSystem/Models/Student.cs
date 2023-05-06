using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace SchoolManagmentSystem.Models
{
    public class Student
    {
        [Key]
        [Display(Name = "Number")]
        public int StudentID { get; set; }
        [Required]
        [StringLength(15, MinimumLength = 2, ErrorMessage = "Name cannot be shorter than 2 characters or longer than 15 characters.")]
        public string Name { get; set; }
        [Required]
        [StringLength(15, MinimumLength = 2, ErrorMessage = "Surname cannot be shorter than 2 characters or longer than 15 characters.")]
        public string Surname { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}")]
        [DisplayName("Birth Date")]
        public DateTime BirthDate { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}")]
        [DisplayName("Register Date")]
        public DateTime RegisterDate { get; set; }
        public string Address { get; set; }
        [Display(Name = "Full Name")]

        public string FullName
        {
            get
            {
                return Name + " " + Surname;
            }
        }
    }
}